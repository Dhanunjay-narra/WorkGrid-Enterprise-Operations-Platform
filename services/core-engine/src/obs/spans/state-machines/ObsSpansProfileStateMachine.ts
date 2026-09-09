export type ObsSpansProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansProfileStateMachine {
  private allowedTransitions: Record<ObsSpansProfileState, ObsSpansProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansProfileState, to: ObsSpansProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansProfileState, to: ObsSpansProfileState): ObsSpansProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansProfile: " + from + " -> " + to);
    }
    return to;
  }
}
