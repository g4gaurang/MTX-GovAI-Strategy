import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type ChartItem = {
  name: string
  score: number
}

export default function OpportunityChart({ data }: { data: ChartItem[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 45 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dbe3ee" />
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#40516b' }} angle={-18} textAnchor="end" interval={0} />
        <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#40516b' }} />
        <Tooltip cursor={{ fill: '#eef4fa' }} />
        <Legend />
        <Bar name="Priority score (illustrative)" dataKey="score" fill="#3155d9" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
