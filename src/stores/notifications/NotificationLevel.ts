/*
Copyright 2020 The Matrix.org Foundation C.I.C.

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

import { _t } from "../../languageHandler";

export enum NotificationLevel {
    Muted,
    // Inverted (None -> Red) because we do integer comparisons on this
    None, // nothing special
    // TODO: Remove bold with notifications: https://github.com/vector-im/element-web/issues/14227
    Activity, // no badge, show as unread
    Notification, // unread notified messages
    Highlight, // unread pings
    Unsent, // some messages failed to send
}

export function humanReadableNotificationLevel(level: NotificationLevel): string {
    switch (level) {
        case NotificationLevel.None:
            return _t("notifications|level_none");
        case NotificationLevel.Activity:
            return _t("notifications|level_activity");
        case NotificationLevel.Notification:
            return _t("notifications|level_notification");
        case NotificationLevel.Highlight:
            return _t("notifications|level_highlight");
        case NotificationLevel.Unsent:
            return _t("notifications|level_unsent");
        case NotificationLevel.Muted:
            return _t("notifications|level_muted");
    }
}
