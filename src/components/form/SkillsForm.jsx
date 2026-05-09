import TagInput from '../ui/TagInput'

export default function SkillsForm({ data, onChange }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
      <TagInput tags={data} onChange={onChange} />
    </div>
  )
}
