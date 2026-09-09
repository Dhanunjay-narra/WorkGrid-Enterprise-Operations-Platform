export type TenancyStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyStateStateMachine {
  private allowedTransitions: Record<TenancyStateState, TenancyStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyStateState, to: TenancyStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyStateState, to: TenancyStateState): TenancyStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyState: " + from + " -> " + to);
    }
    return to;
  }
}
