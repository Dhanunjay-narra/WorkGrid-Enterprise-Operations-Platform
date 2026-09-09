export type AiAgentsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsPayloadStateMachine {
  private allowedTransitions: Record<AiAgentsPayloadState, AiAgentsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsPayloadState, to: AiAgentsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsPayloadState, to: AiAgentsPayloadState): AiAgentsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
