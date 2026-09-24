export const uid=()=>crypto.randomUUID()
export const today=()=>new Date().toISOString().slice(0,10)
export const dateText=v=>v?new Date(`${v}T12:00:00`).toLocaleDateString('pt-BR'):'—'
export const weekDays=['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo']
export const weekDayShort=['SEG','TER','QUA','QUI','SEX','SÁB','DOM']
export function mondayOf(value=new Date()){const d=typeof value==='string'?new Date(`${value}T12:00:00`):new Date(value),day=d.getDay()||7;d.setDate(d.getDate()-day+1);return d.toISOString().slice(0,10)}
export function addDays(value,n){const d=new Date(`${value}T12:00:00`);d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)}
export const weekDates=monday=>Array.from({length:7},(_,i)=>addDays(monday,i))
export const initials=name=>String(name||'?').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase()
export const emptyState={departments:[],employees:[],shifts:[],assignments:[],settings:{organization:'Prefeitura de Caxias - MA',systemName:'Caxias em Escala',weekStartsOn:1}}
export const assignmentStatus=a=>a.status||'Escalado'
