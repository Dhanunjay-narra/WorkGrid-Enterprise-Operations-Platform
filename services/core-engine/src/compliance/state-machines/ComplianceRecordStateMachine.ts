export type ComplianceRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceRecordStateMachine {
  private allowedTransitions: Record<ComplianceRecordState, ComplianceRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceRecordState, to: ComplianceRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceRecordState, to: ComplianceRecordState): ComplianceRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceRecord: " + from + " -> " + to);
    }
    return to;
  }
}
