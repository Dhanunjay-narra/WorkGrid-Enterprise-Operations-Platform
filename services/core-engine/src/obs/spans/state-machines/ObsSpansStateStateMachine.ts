export type ObsSpansStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansStateStateMachine {
  private allowedTransitions: Record<ObsSpansStateState, ObsSpansStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansStateState, to: ObsSpansStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansStateState, to: ObsSpansStateState): ObsSpansStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansState: " + from + " -> " + to);
    }
    return to;
  }
}
