export type ComplianceScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceScheduleStateMachine {
  private allowedTransitions: Record<ComplianceScheduleState, ComplianceScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceScheduleState, to: ComplianceScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceScheduleState, to: ComplianceScheduleState): ComplianceScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
