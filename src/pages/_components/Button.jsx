export function Button({ variant, title, url, className}) {
    return (
        <>
            {variant === "orange" ?
                <a
                    target="_blank"
                    href={url}
                    className={`p-[15px] h-9 flex justify-center items-center shadow-[0_0_5px_-0.2px_#0005] bg-[color:var(--orange)] text-[white] rounded-lg font-bold hover:cursor-pointer hover:scale-105 ${className}`}
                >
                    {title}  <img className="h-5 bg-cover bg-no-repeat bg-center" src={`/seta-direita-normal.png`} />
                </a> :
                <a
                    target="_blank"
                    href={url}
                    className={`p-[15px] h-9 flex justify-center items-center shadow-[0_0_5px_-0.2px_#0005] bg-[white] text-[color:var(--orange)] rounded-lg font-bold hover:cursor-pointer hover:scale-105 ${className}`}
                >
                    {title} <img className="h-5 bg-cover bg-no-repeat bg-center" src={`/seta-direita-orange.png`} />
                </a>}</>

    )
}