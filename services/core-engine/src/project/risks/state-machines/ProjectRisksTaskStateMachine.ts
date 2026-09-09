export type ProjectRisksTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksTaskStateMachine {
  private allowedTransitions: Record<ProjectRisksTaskState, ProjectRisksTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksTaskState, to: ProjectRisksTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksTaskState, to: ProjectRisksTaskState): ProjectRisksTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksTask: " + from + " -> " + to);
    }
    return to;
  }
}
