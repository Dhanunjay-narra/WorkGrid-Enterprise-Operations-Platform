export type ObsLoggingItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingItemStateMachine {
  private allowedTransitions: Record<ObsLoggingItemState, ObsLoggingItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingItemState, to: ObsLoggingItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingItemState, to: ObsLoggingItemState): ObsLoggingItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingItem: " + from + " -> " + to);
    }
    return to;
  }
}
