export type ObsSpansConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansConfigStateMachine {
  private allowedTransitions: Record<ObsSpansConfigState, ObsSpansConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansConfigState, to: ObsSpansConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansConfigState, to: ObsSpansConfigState): ObsSpansConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansConfig: " + from + " -> " + to);
    }
    return to;
  }
}
