export type SupportKnowledgePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportKnowledgePayloadStateMachine {
  private allowedTransitions: Record<SupportKnowledgePayloadState, SupportKnowledgePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportKnowledgePayloadState, to: SupportKnowledgePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportKnowledgePayloadState, to: SupportKnowledgePayloadState): SupportKnowledgePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportKnowledgePayload: " + from + " -> " + to);
    }
    return to;
  }
}
