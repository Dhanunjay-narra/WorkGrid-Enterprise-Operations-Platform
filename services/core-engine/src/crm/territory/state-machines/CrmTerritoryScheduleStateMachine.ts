export type CrmTerritoryScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryScheduleStateMachine {
  private allowedTransitions: Record<CrmTerritoryScheduleState, CrmTerritoryScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryScheduleState, to: CrmTerritoryScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryScheduleState, to: CrmTerritoryScheduleState): CrmTerritoryScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritorySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
