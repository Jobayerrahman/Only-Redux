export default function Stats({count}){
    return(
        <div className="flex">
            <div class="text-2xl font-semibold">Total Count : </div>
            <div class="text-2xl font-semibold"> {count} </div>
        </div>
    )
}