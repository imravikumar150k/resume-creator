import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { usePageTitle } from '../hooks/usePageTitle'
import { getBiodataTemplate } from '../components/biodata/templates'
import PersonalDetailsForm from '../components/biodata/form/PersonalDetailsForm'
import ReligiousForm from '../components/biodata/form/ReligiousForm'
import EducationCareerForm from '../components/biodata/form/EducationCareerForm'
import FamilyForm from '../components/biodata/form/FamilyForm'
import ContactForm from '../components/biodata/form/ContactForm'
import HobbiesForm from '../components/biodata/form/HobbiesForm'
import BiodataPreview from '../components/biodata/preview/BiodataPreview'
import Button from '../components/ui/Button'
import SaveIndicator from '../components/ui/SaveIndicator'
import ColorPicker from '../components/ui/ColorPicker'

const EMPTY_BIODATA = {
  personalInfo: { name: '', photo: '', dob: '', birthTime: '', birthPlace: '', height: '', weight: '', complexion: '', bloodGroup: '' },
  religious: { religion: '', caste: '', subCaste: '', gotra: '', nakshatra: '', rashi: '' },
  education: { degree: '', college: '', occupation: '', company: '', income: '' },
  family: { fatherName: '', fatherOccupation: '', motherName: '', motherOccupation: '', brothers: '', sisters: '', familyType: '', familyStatus: '' },
  contact: { address: '', city: '', state: '', phone: '', email: '' },
  hobbies: '',
}

function mergeWithDefaults(stored) {
  const merged = { ...EMPTY_BIODATA }
  for (const key of Object.keys(EMPTY_BIODATA)) {
    if (typeof EMPTY_BIODATA[key] === 'object' && EMPTY_BIODATA[key] !== null) {
      merged[key] = { ...EMPTY_BIODATA[key], ...(stored[key] || {}) }
    } else {
      merged[key] = stored[key] !== undefined ? stored[key] : EMPTY_BIODATA[key]
    }
  }
  return merged
}

export default function BiodataEditorPage() {
  usePageTitle('Create Your Biodata')
  const [rawData, setBiodataData, clearData] = useLocalStorage('biodata-data', EMPTY_BIODATA)
  const biodataData = mergeWithDefaults(rawData)
  const [templateId] = useLocalStorage('biodata-template', 'traditional')
  const defaultColor = getBiodataTemplate(templateId).accentColor
  const [accentColor, setAccentColor] = useLocalStorage('biodata-accent-color', defaultColor)
  const previewRef = useRef(null)
  const navigate = useNavigate()

  const handlePrint = useReactToPrint({ contentRef: previewRef })

  function updateField(field, value) {
    setBiodataData({ ...biodataData, [field]: value })
  }

  function handleClear() {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      clearData()
    }
  }

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="md:hidden bg-yellow-50 border-b border-yellow-200 px-4 py-2 text-sm text-yellow-800">
        For the best editing experience, please use a desktop or tablet device.
      </div>

      <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-2 flex items-center justify-between">
        <SaveIndicator data={biodataData} />
        <div className="flex gap-2 md:gap-3">
          <Button onClick={() => navigate('/biodata/templates')} variant="secondary">Change Template</Button>
          <Button onClick={handleClear} variant="danger">Clear All</Button>
          <Button onClick={handlePrint} variant="primary">Download PDF</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-full md:w-1/2 overflow-y-auto p-4 md:p-6 space-y-6 border-r border-gray-200">
          <PersonalDetailsForm data={biodataData.personalInfo} onChange={(val) => updateField('personalInfo', val)} />
          <ReligiousForm data={biodataData.religious} onChange={(val) => updateField('religious', val)} />
          <EducationCareerForm data={biodataData.education} onChange={(val) => updateField('education', val)} />
          <FamilyForm data={biodataData.family} onChange={(val) => updateField('family', val)} />
          <ContactForm data={biodataData.contact} onChange={(val) => updateField('contact', val)} />
          <HobbiesForm data={biodataData.hobbies} onChange={(val) => updateField('hobbies', val)} />
          <ColorPicker value={accentColor} onChange={setAccentColor} />
        </div>

        <div className="hidden md:block w-1/2 overflow-y-auto p-6 bg-gray-100">
          <div className="shadow-lg">
            <BiodataPreview ref={previewRef} data={biodataData} templateId={templateId} accentColor={accentColor} />
          </div>
        </div>
      </div>
    </div>
  )
}
