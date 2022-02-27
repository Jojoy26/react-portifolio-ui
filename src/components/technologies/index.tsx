import * as C from "./styles";

const Thechnologies = () => {
    return(
        <C.Container id="technologies">
            <C.Title>
                Technologies
            </C.Title>
            <C.TextInfo>
                Lotam, accusamus reiciendis ducimus excepturi consectetur quasi eum <br /> non a commodi officiis earum hic esse vero.
            </C.TextInfo>
            <C.Row>
                <C.Card>
                    <C.ReactIcon size={29}/>
                    <C.TitleCard>
                        Front-End
                    </C.TitleCard>
                    <C.DescriptionCard>
                        Experience with <br /> React.js
                    </C.DescriptionCard>
                </C.Card>
                <C.Card>
                    <C.FlutterIcon size={29}/>
                    <C.TitleCard>
                        Flutter
                    </C.TitleCard>
                    <C.DescriptionCard>
                        Experience with <br /> Flutter and Dart
                    </C.DescriptionCard>
                </C.Card>
                <C.Card>
                    <C.TypescriptIcon size={29}/>
                    <C.TitleCard>
                        Typescript
                    </C.TitleCard>
                    <C.DescriptionCard>
                        Experience with <br /> Typescript
                    </C.DescriptionCard>
                </C.Card>
            </C.Row>
            <C.Line/>
        </C.Container>
    );
}

export default Thechnologies;