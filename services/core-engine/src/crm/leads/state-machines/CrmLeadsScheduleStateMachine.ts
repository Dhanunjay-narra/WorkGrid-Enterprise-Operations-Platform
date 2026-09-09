export type CrmLeadsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsScheduleStateMachine {
  private allowedTransitions: Record<CrmLeadsScheduleState, CrmLeadsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsScheduleState, to: CrmLeadsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsScheduleState, to: CrmLeadsScheduleState): CrmLeadsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
