export type ObsLoggingProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingProfileStateMachine {
  private allowedTransitions: Record<ObsLoggingProfileState, ObsLoggingProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingProfileState, to: ObsLoggingProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingProfileState, to: ObsLoggingProfileState): ObsLoggingProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingProfile: " + from + " -> " + to);
    }
    return to;
  }
}
