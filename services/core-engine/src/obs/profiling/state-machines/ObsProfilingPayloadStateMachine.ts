export type ObsProfilingPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingPayloadStateMachine {
  private allowedTransitions: Record<ObsProfilingPayloadState, ObsProfilingPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingPayloadState, to: ObsProfilingPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingPayloadState, to: ObsProfilingPayloadState): ObsProfilingPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingPayload: " + from + " -> " + to);
    }
    return to;
  }
}
