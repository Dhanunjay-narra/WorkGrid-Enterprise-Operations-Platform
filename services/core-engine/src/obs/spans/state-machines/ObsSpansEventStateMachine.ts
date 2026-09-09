export type ObsSpansEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansEventStateMachine {
  private allowedTransitions: Record<ObsSpansEventState, ObsSpansEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansEventState, to: ObsSpansEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansEventState, to: ObsSpansEventState): ObsSpansEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansEvent: " + from + " -> " + to);
    }
    return to;
  }
}
