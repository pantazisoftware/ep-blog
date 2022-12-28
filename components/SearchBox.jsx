const SearchBox = ({placeholder}) => {
    return (
        <div className="bg-white/30 p-6">
            <input type="text" placeholder={placeholder} className="p-2 text-lg font-bold rounded-lg outline-none" />
        </div>
    )
}

export default SearchBox