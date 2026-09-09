export type SupportEscalationNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationNodeStateMachine {
  private allowedTransitions: Record<SupportEscalationNodeState, SupportEscalationNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationNodeState, to: SupportEscalationNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationNodeState, to: SupportEscalationNodeState): SupportEscalationNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationNode: " + from + " -> " + to);
    }
    return to;
  }
}
