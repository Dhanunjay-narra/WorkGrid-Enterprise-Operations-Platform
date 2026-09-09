export type ObsLoggingMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingMappingStateMachine {
  private allowedTransitions: Record<ObsLoggingMappingState, ObsLoggingMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingMappingState, to: ObsLoggingMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingMappingState, to: ObsLoggingMappingState): ObsLoggingMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingMapping: " + from + " -> " + to);
    }
    return to;
  }
}
