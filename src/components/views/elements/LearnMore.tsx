/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";

import { _t } from "../../../languageHandler";
import Modal from "../../../Modal";
import InfoDialog from "../dialogs/InfoDialog";
import AccessibleButton, { ButtonProps } from "./AccessibleButton";

type Props = Omit<ButtonProps<"div">, "element" | "kind" | "onClick" | "className"> & {
    title: string;
    description: string | React.ReactNode;
};

const LearnMore: React.FC<Props> = ({ title, description, ...rest }) => {
    const onClick = (): void => {
        Modal.createDialog(InfoDialog, {
            title,
            description,
            button: _t("action|got_it"),
            hasCloseButton: true,
        });
    };

    return (
        <AccessibleButton {...rest} kind="link_inline" onClick={onClick} className="mx_LearnMore_button">
            {_t("action|learn_more")}
        </AccessibleButton>
    );
};

export default LearnMore;
