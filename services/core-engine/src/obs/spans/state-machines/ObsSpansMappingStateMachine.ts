export type ObsSpansMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansMappingStateMachine {
  private allowedTransitions: Record<ObsSpansMappingState, ObsSpansMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansMappingState, to: ObsSpansMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansMappingState, to: ObsSpansMappingState): ObsSpansMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansMapping: " + from + " -> " + to);
    }
    return to;
  }
}
