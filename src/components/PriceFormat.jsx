

const PriceFormat = ({price}) => {
    
    return(
        Intl.NumberFormat("bn-IN",{
            style:"currency",
            currency:"BDT",
            maximumFractionDigits:2,
        }).format(price/100)
    )
}

export default PriceFormat