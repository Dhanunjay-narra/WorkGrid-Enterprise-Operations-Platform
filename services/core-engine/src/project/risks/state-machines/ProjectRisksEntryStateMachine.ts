export type ProjectRisksEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksEntryStateMachine {
  private allowedTransitions: Record<ProjectRisksEntryState, ProjectRisksEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksEntryState, to: ProjectRisksEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksEntryState, to: ProjectRisksEntryState): ProjectRisksEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksEntry: " + from + " -> " + to);
    }
    return to;
  }
}
