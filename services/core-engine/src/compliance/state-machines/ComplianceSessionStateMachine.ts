export type ComplianceSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceSessionStateMachine {
  private allowedTransitions: Record<ComplianceSessionState, ComplianceSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceSessionState, to: ComplianceSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceSessionState, to: ComplianceSessionState): ComplianceSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceSession: " + from + " -> " + to);
    }
    return to;
  }
}
