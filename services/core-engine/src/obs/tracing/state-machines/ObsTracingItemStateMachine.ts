export type ObsTracingItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingItemStateMachine {
  private allowedTransitions: Record<ObsTracingItemState, ObsTracingItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingItemState, to: ObsTracingItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingItemState, to: ObsTracingItemState): ObsTracingItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingItem: " + from + " -> " + to);
    }
    return to;
  }
}
