import React from "react";
import * as C from "./styles";

const Personal = () => {
    return(
        <C.Container>
            <C.Title>
                Personal Achievements
            </C.Title>
            <C.Grid>
                <C.Card>
                    <C.TitleCard>
                        20+
                    </C.TitleCard>
                    <C.InfoCard>
                        Open Source <br />
                        Projects
                    </C.InfoCard>
                </C.Card>
                <C.Card>
                    <C.TitleCard>
                        1000+
                    </C.TitleCard>
                    <C.InfoCard>
                        Students
                    </C.InfoCard>
                </C.Card>
                <C.Card>
                    <C.TitleCard>
                        1900+
                    </C.TitleCard>
                    <C.InfoCard>
                        Github Followers
                    </C.InfoCard>
                </C.Card>
                <C.Card>
                    <C.TitleCard>
                        5000+
                    </C.TitleCard>
                    <C.InfoCard>
                        Github Stars
                    </C.InfoCard>
                </C.Card>
            </C.Grid>
        </C.Container>
    );
}

export default Personal;