// 模組樣式 (module css)
import S from './style.module.css'

const Loading = () => {
  return (
    <div className={S.loading}>
      <div className={S.spinner}></div>
    </div>
  )
}

export default Loading
