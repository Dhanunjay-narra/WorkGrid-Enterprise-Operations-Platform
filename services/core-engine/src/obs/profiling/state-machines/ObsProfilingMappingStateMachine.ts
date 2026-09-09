export type ObsProfilingMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingMappingStateMachine {
  private allowedTransitions: Record<ObsProfilingMappingState, ObsProfilingMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingMappingState, to: ObsProfilingMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingMappingState, to: ObsProfilingMappingState): ObsProfilingMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingMapping: " + from + " -> " + to);
    }
    return to;
  }
}
