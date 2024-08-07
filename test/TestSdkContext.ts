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

import { SdkContextClass } from "../src/contexts/SDKContext";
import { PosthogAnalytics } from "../src/PosthogAnalytics";
import { SlidingSyncManager } from "../src/SlidingSyncManager";
import { RoomNotificationStateStore } from "../src/stores/notifications/RoomNotificationStateStore";
import RightPanelStore from "../src/stores/right-panel/RightPanelStore";
import { RoomViewStore } from "../src/stores/RoomViewStore";
import { SpaceStoreClass } from "../src/stores/spaces/SpaceStore";
import { WidgetLayoutStore } from "../src/stores/widgets/WidgetLayoutStore";
import { WidgetPermissionStore } from "../src/stores/widgets/WidgetPermissionStore";
import WidgetStore from "../src/stores/WidgetStore";
import {
    VoiceBroadcastPlaybacksStore,
    VoiceBroadcastPreRecordingStore,
    VoiceBroadcastRecordingsStore,
} from "../src/voice-broadcast";

/**
 * A class which provides the same API as SdkContextClass but adds additional unsafe setters which can
 * replace individual stores. This is useful for tests which need to mock out stores.
 */
export class TestSdkContext extends SdkContextClass {
    public declare _RightPanelStore?: RightPanelStore;
    public declare _RoomNotificationStateStore?: RoomNotificationStateStore;
    public declare _RoomViewStore?: RoomViewStore;
    public declare _WidgetPermissionStore?: WidgetPermissionStore;
    public declare _WidgetLayoutStore?: WidgetLayoutStore;
    public declare _WidgetStore?: WidgetStore;
    public declare _PosthogAnalytics?: PosthogAnalytics;
    public declare _SlidingSyncManager?: SlidingSyncManager;
    public declare _SpaceStore?: SpaceStoreClass;
    public declare _VoiceBroadcastRecordingsStore?: VoiceBroadcastRecordingsStore;
    public declare _VoiceBroadcastPreRecordingStore?: VoiceBroadcastPreRecordingStore;
    public declare _VoiceBroadcastPlaybacksStore?: VoiceBroadcastPlaybacksStore;

    constructor() {
        super();
    }
}
