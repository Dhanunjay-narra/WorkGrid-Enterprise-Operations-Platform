export type ObsProbesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesPayloadStateMachine {
  private allowedTransitions: Record<ObsProbesPayloadState, ObsProbesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesPayloadState, to: ObsProbesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesPayloadState, to: ObsProbesPayloadState): ObsProbesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
