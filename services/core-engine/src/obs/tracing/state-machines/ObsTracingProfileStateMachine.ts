export type ObsTracingProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingProfileStateMachine {
  private allowedTransitions: Record<ObsTracingProfileState, ObsTracingProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingProfileState, to: ObsTracingProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingProfileState, to: ObsTracingProfileState): ObsTracingProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingProfile: " + from + " -> " + to);
    }
    return to;
  }
}
