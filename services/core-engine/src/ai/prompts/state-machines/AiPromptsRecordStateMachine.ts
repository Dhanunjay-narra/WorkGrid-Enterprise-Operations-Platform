export type AiPromptsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsRecordStateMachine {
  private allowedTransitions: Record<AiPromptsRecordState, AiPromptsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsRecordState, to: AiPromptsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsRecordState, to: AiPromptsRecordState): AiPromptsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
