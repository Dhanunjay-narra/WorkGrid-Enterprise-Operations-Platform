export type ObsSpansItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansItemStateMachine {
  private allowedTransitions: Record<ObsSpansItemState, ObsSpansItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansItemState, to: ObsSpansItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansItemState, to: ObsSpansItemState): ObsSpansItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansItem: " + from + " -> " + to);
    }
    return to;
  }
}
