export type ComplianceQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceQueueStateMachine {
  private allowedTransitions: Record<ComplianceQueueState, ComplianceQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceQueueState, to: ComplianceQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceQueueState, to: ComplianceQueueState): ComplianceQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceQueue: " + from + " -> " + to);
    }
    return to;
  }
}
