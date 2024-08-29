import { Agency } from "./agency.model";
import { LauncherInfo } from "./launcher-info.model";
import { SpaceCraftInfo } from "./spacecraft-info.model";

export interface AgencyDetail extends Agency {
    description: string | null,
    total_launch_count: number | null,
    successful_launches: number | null,
    consecutive_successful_launches: number | null,
    failed_launches: number | null,
    pending_launches: number | null,
    successful_landings: number | null,
    failed_landings: number | null,
    attempted_landings: number | null,
    consecutive_successful_landings: number | null,
    info_url: string | null,
    wiki_url: string | null,
    launcher_list: LauncherInfo[],
    spacecraft_list: SpaceCraftInfo[]
}
