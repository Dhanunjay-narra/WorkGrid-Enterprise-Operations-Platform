export type TenancyEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyEventStateMachine {
  private allowedTransitions: Record<TenancyEventState, TenancyEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyEventState, to: TenancyEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyEventState, to: TenancyEventState): TenancyEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyEvent: " + from + " -> " + to);
    }
    return to;
  }
}
