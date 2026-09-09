export type TenancyEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyEntryStateMachine {
  private allowedTransitions: Record<TenancyEntryState, TenancyEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyEntryState, to: TenancyEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyEntryState, to: TenancyEntryState): TenancyEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyEntry: " + from + " -> " + to);
    }
    return to;
  }
}
