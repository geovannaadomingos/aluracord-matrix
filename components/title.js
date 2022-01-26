import appConfig from '../config.json' 

export default function Title(props) {
    const Tag = props.tag || "h1"
    const Color = props.color || appConfig.theme.colors.neutrals["000"]
    const Valor = props.children
    return (
        <>
            <Tag>{Valor}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${Color};
                }
            `}</style>
        </>
    )
}