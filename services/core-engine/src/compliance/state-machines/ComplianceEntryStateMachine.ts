export type ComplianceEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceEntryStateMachine {
  private allowedTransitions: Record<ComplianceEntryState, ComplianceEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceEntryState, to: ComplianceEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceEntryState, to: ComplianceEntryState): ComplianceEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceEntry: " + from + " -> " + to);
    }
    return to;
  }
}
