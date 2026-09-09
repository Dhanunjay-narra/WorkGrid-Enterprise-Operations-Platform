export type SecurityRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityRecordStateMachine {
  private allowedTransitions: Record<SecurityRecordState, SecurityRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityRecordState, to: SecurityRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityRecordState, to: SecurityRecordState): SecurityRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityRecord: " + from + " -> " + to);
    }
    return to;
  }
}
