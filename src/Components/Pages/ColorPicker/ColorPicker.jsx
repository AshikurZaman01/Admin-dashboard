import PageHeaders from '../../Utils/PageHeaders/PageHeaders';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

const ColorPicker = () => {

    const change = (args) => {
        document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
    };

    const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">

            {/* Page Header */}
            <PageHeaders category={"App"} title={"Color Picker"} />

            <div className="text-center">
                <div id="preview" />
                <div className="flex justify-center items-center gap-20 flex-wrap">
                    <div>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
                        <CustomColorPicker id="inline-palette" mode="Palette" />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
                        <CustomColorPicker id="inline-picker" mode="Picker" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker