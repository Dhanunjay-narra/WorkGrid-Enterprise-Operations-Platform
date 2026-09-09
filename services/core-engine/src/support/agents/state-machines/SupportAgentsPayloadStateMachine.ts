export type SupportAgentsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsPayloadStateMachine {
  private allowedTransitions: Record<SupportAgentsPayloadState, SupportAgentsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsPayloadState, to: SupportAgentsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsPayloadState, to: SupportAgentsPayloadState): SupportAgentsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
