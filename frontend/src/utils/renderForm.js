
import RenderGroup from "../components/RenderGroup"
import RenderIgnore from "../components/RenderIgnore"
import RenderInput from "../components/RenderInput"
import RenderNumber from "../components/RenderNumber"
import RenderRadio from "../components/RenderRadio"
import RenderSelect from "../components/RenderSelect"
import RenderSwitch from "../components/RenderSwitch"

export default function (uiSchema) {
    let sortedUiSchema = uiSchema.sort((a, b) => {
        return a.sort - b.sort
    })
    let formComponents = sortedUiSchema.map((item) => {
        switch (item.uiType) {
            case "Input":
                return <RenderInput item={item}/>
            case "Group":
                return <RenderGroup item={item}/>
            case "Number":
                return <RenderNumber item={item}/>
            case "Select":
                return <RenderSelect item={item}/>
            case "Switch":
                return <RenderSwitch item={item}/>
            case "Radio":
                return <RenderRadio item={item}/>
            case "Ignore":
                return <RenderIgnore item={item}/>
            default:
                return null

        }
    })
    return formComponents
}
