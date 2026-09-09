export type ComplianceEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceEventStateMachine {
  private allowedTransitions: Record<ComplianceEventState, ComplianceEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceEventState, to: ComplianceEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceEventState, to: ComplianceEventState): ComplianceEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceEvent: " + from + " -> " + to);
    }
    return to;
  }
}
