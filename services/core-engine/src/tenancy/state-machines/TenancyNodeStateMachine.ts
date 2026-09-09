export type TenancyNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyNodeStateMachine {
  private allowedTransitions: Record<TenancyNodeState, TenancyNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyNodeState, to: TenancyNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyNodeState, to: TenancyNodeState): TenancyNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyNode: " + from + " -> " + to);
    }
    return to;
  }
}
