const Logo = ({height}) => {
    return(
        
       
  <div className={`flex justify-between   h-48   items-center `} >
            <div className={`flex p-2 px-36 m-auto text-${height}xl kmail`}>
           km<div className={`hover:rotate-[180deg] -translate-x-12 hover:-translate-x-2  hover:translate-y-${height-1} hover:text-${height+2}xl hover:text-rose-500 duration-700`}  >Ai</div><div className="-translate-x-12">l</div>
            </div>
        </div>
       
    )
}
export default Logo
