export type BiForecastsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsEntryStateMachine {
  private allowedTransitions: Record<BiForecastsEntryState, BiForecastsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsEntryState, to: BiForecastsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsEntryState, to: BiForecastsEntryState): BiForecastsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
