export type SupportSlaNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaNodeStateMachine {
  private allowedTransitions: Record<SupportSlaNodeState, SupportSlaNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaNodeState, to: SupportSlaNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaNodeState, to: SupportSlaNodeState): SupportSlaNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaNode: " + from + " -> " + to);
    }
    return to;
  }
}
